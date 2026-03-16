export {}

declare global {
  interface Window {
    sendEmail: (options: {
      to?: string
      subject: string
      text: string
      html?: string
    }) => Promise<{ ok: boolean }>
  }
}
