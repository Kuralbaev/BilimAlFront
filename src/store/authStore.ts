import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AuthService } from '../services/authService'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuthenticated = ref(false)
    const token = ref<string | null>(null)
    const currentLocale = ref<string>('ru')

    async function login(email: string, password: string) {
      const response = await AuthService.login(email, password)
      isAuthenticated.value = true
      token.value = response.token
    }

    async function logout() {
      isAuthenticated.value = false
      token.value = null
    }

    return {
      isAuthenticated,
      token,
      login,
      logout,
      currentLocale,
    }
  },
  {
    persist: true,
  }
)
