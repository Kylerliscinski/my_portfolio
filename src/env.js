export const dev = window.location.origin.includes('localhost')
export const devCodespace = window.location.origin.includes('github.dev')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = ''
export const clientId = ''
export const audience = ''

export const emailConfig = {
  serviceId: '',
  templateId: '',
  userId: '',
  myName: '',
  myEmail: ''
}