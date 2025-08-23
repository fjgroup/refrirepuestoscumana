import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (path: string) => string
  }
}

