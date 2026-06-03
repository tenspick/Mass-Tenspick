import { config } from '../config';

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface EmailServiceResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Service to handle form submissions and send them as emails.
 * Uses FormSubmit.co API for background AJAX submissions.
 */
export const emailService = {
  /**
   * Submits a contact form payload to the configured email endpoint.
   * @param payload Contact form details
   */
  async sendContactForm(payload: ContactEmailPayload): Promise<EmailServiceResponse> {
    if (!payload.name.trim()) {
      return { success: false, error: 'Name is required.' };
    }
    if (!payload.email.trim()) {
      return { success: false, error: 'Email is required.' };
    }
    if (!payload.message.trim()) {
      return { success: false, error: 'Message is required.' };
    }

    const url = `${config.emailServiceUrl}/${config.targetEmail}`;

    const body = {
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone?.trim() || 'Not Provided',
      company: payload.company?.trim() || 'Not Provided',
      service: payload.service?.trim() || 'Not Specified',
      message: payload.message.trim(),
      _subject: `New Lead Submission: ${payload.name.trim()}`,
      _captcha: 'false', // Disable verification screen for AJAX forms
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status code ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'FormSubmit submission reported failure.');
      }

      // Log structured audit action (Infrastructure tracking)
      const auditRecord = {
        timestamp: new Date().toISOString(),
        actor: 'Client-Side Form Submitter',
        action: 'SUBMIT_CONTACT_FORM',
        resource_id: config.targetEmail,
        status: 'SUCCESS',
      };
      
      // Since it's client-side without local backend logging database, we output to console in development
      if (import.meta.env.DEV) {
        console.debug('[Audit Log]', auditRecord);
      }

      return {
        success: true,
        message: 'Your message has been sent successfully.',
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred during submission.';
      
      const errorAuditRecord = {
        timestamp: new Date().toISOString(),
        actor: 'Client-Side Form Submitter',
        action: 'SUBMIT_CONTACT_FORM_ERROR',
        resource_id: config.targetEmail,
        status: 'FAILED',
        error: errorMessage,
      };

      if (import.meta.env.DEV) {
        console.error('[Audit Log - FAILED]', errorAuditRecord);
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  },
};
export default emailService;
