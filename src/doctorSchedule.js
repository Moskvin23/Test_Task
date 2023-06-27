const splitWorkingHours = (schedule) => {
  const start = new Date(`2000-01-01T${schedule.start}`)
  const end = new Date(`2000-01-01T${schedule.end}`)

  const timeSlots = []
  const appointments = []

  schedule.appointments.forEach((appointment) => {
    const appointmentStart = new Date(`2000-01-01T${appointment.start}`)
    const appointmentEnd = new Date(appointmentStart.getTime() + appointment.duration * 60000)
    appointments.push({ start: appointmentStart, end: appointmentEnd })
  })

  let currentTime = new Date(start)
  while (currentTime < end) {
    const timeSlotStart = new Date(currentTime)
    const timeSlotEnd = new Date(currentTime.getTime() + 45 * 60000)

    const conflictingAppointment = appointments.find(
      (appointment) =>
        (appointment.start >= timeSlotStart && appointment.start < timeSlotEnd) ||
        (appointment.end > timeSlotStart && appointment.end <= timeSlotEnd) ||
        (appointment.start <= timeSlotStart && appointment.end >= timeSlotEnd),
    )

    if (!conflictingAppointment) {
      timeSlots.push(timeSlotStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    currentTime.setMinutes(currentTime.getMinutes() + 45)
  }

  return timeSlots
}

module.exports = {
  splitWorkingHours,
}
