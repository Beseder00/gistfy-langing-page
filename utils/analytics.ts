declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params: {
        send_to: string
        value?: number
        currency?: string
      }
    ) => void
  }
}

export const trackConversion = (value: number = 1.0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-16939115430/DziiCPvX26waEKbHmY0_',
      value: value,
      currency: 'ILS'
    })
  }
} 