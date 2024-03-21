// convert date to readable format

export default function convertDate(date) {
    const dateFormat = new Date(date)
    const result = dateFormat.toDateString()
    return result
}
