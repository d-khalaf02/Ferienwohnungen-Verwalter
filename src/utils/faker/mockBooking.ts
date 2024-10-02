import { createBookingInstance } from '../../enities/booking/createBookingInstance'
import type { IBooking } from '../../enities/interfaces/IBooking'
import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'

export function mockBooking() {
    const booking = container.get<IBooking>(TYPES.BookingFaker)

    return createBookingInstance(
        booking.id,
        booking.services,
        booking.checkInDate,
        booking.checkOutDate
    )
}