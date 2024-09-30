import { container } from '../../ioc/container'
import { TYPES } from '../../ioc/types'
import { BookingBuilder } from '../../utils/builders/BookingBuilder'

export function createBookingInstance(
    id: number,
    checkInDate: Date,
    checkOutDate: Date
){
    const bookingBuilder = container.get<BookingBuilder>(TYPES.BookingBuilder)

    return bookingBuilder
        .setId(id)
        .setCheckInDate(checkInDate)
        .setCheckOutDate(checkOutDate)
        .build()
}