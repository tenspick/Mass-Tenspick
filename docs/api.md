# API Documentation

## Contact Form Submission API

This application connects to the FormSubmit.co service in the frontend to route contact form submissions to the target inbox.

### Submit Contact Form

Submit contact form details to be emailed.

- **URL**: `https://formsubmit.co/ajax/tenspickindia@gmail.com`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
  - `Accept`: `application/json`

#### Request Payload

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Name of the person submitting the form |
| `email` | `string` | Yes | Sender email address |
| `phone` | `string` | No | Sender phone number. Defaults to `'Not Provided'` |
| `company` | `string` | No | Sender company name. Defaults to `'Not Provided'` |
| `service` | `string` | No | Service interested in. Defaults to `'Not Specified'` |
| `message` | `string` | Yes | Message text content |
| `_subject` | `string` | No | Email subject |
| `_captcha` | `string` | No | Set to `'false'` to disable the FormSubmit confirmation page and return JSON directly |

**Example request:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "company": "Growth Co",
  "service": "SEO (Search Engine Optimization)",
  "message": "We need help ranking our landing page.",
  "_subject": "New Lead Submission: Jane Doe",
  "_captcha": "false"
}
```

#### Successful Response

- **Status Code**: `200 OK`
- **Content-Type**: `application/json`

```json
{
  "success": "true",
  "message": "The form was submitted successfully."
}
```

#### Error Response

- **Status Code**: `400 Bad Request` or `500 Internal Server Error`
- **Content-Type**: `application/json`

```json
{
  "success": "false",
  "message": "Error details indicating what went wrong."
}
```
