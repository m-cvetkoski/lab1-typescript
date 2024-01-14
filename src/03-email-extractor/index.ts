interface User {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: (User | null | undefined)[]): string[] {
  const uniqueEmails = new Set<string>()

  users.forEach((user) => {
    if (user && user.email) {
      uniqueEmails.add(user.email)
    }
  })

  return Array.from(uniqueEmails)
}
