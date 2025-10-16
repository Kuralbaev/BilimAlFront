import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AuthService } from '../services/authService'
import type { User } from '../types/api'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuthenticated = ref(false)
    const user = ref<User | null>(null)
    const token = ref<string | null>(null)

    async function login(email: string, password: string) {
      const response = await AuthService.login(email, password)
      isAuthenticated.value = true
      user.value = response.user
      token.value = response.token
    }

    async function logout() {
      isAuthenticated.value = false
      user.value = null
      token.value = null
    }

    return {
      isAuthenticated,
      user,
      token,
      login,
      logout,
    }
  },
  {
    persist: true,
  }
)
