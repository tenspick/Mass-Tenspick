import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App render error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            background: '#F8FAFC',
            color: '#0F172A',
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Something went wrong loading the site
            </h1>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', color: '#475569' }}>
              {this.state.error.message}
            </p>
            <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Run <code style={{ background: '#E2E8F0', padding: '2px 6px', borderRadius: 4 }}>npm run dev</code>{' '}
              and open{' '}
              <a href="http://localhost:5173/" style={{ color: '#2563EB' }}>
                http://localhost:5173/
              </a>
              . Do not open <code style={{ background: '#E2E8F0', padding: '2px 6px', borderRadius: 4 }}>index.html</code>{' '}
              directly in the browser.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
