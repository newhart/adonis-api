import vine from '@vinejs/vine'
/**
 * Validates the post's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(1),
    email: vine.string().trim().email(),
    age: vine.number().positive(),
  })
)
