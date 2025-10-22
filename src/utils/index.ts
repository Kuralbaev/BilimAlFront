export const validation = {
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  isValidPassword: (password: string): boolean => {
    return password.length >= 8
  },
}

export const isMobile = () => {
  return window.innerWidth < 768
}
