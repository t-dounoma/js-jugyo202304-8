import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Person extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public age: number

  @column.dateTime({ autoCreate: true, serializeAs: null }) // autoCreate と serializeAs の修正
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null }) // autoCreate、autoUpdate、serializeAs の修正
  public updatedAt: DateTime
}
