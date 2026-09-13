export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02C20.9 8.62 22 11 22 14.4V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.53-2.25 3.1V21H9z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35C16.22 4.31 15.27 4.23 14.16 4.23c-2.32 0-3.91 1.42-3.91 4.02V10.5H7.75v3h2.5V21h3.25Z" />
    </svg>
  );
}

export function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.4 2.1 1.9 3.6 4 3.9v3.1c-1.5-.05-2.9-.55-4-1.4v6.6c0 3.3-2.5 5.8-5.7 5.8S5.1 18.5 5.1 15.2c0-3.2 2.6-5.8 5.7-5.8.4 0 .8.04 1.15.11v3.2a2.8 2.8 0 0 0-1.15-.24c-1.5 0-2.7 1.2-2.7 2.73s1.2 2.72 2.7 2.72 2.75-1.15 2.75-2.72V3h3Z" />
    </svg>
  );
}
