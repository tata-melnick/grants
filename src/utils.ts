export const formatDate = (value: Date | string | null, delimiter?: string) => {
    if (!value) return ""

    const date = typeof value === "string" ? new Date(value) : value;

    const { format } = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

    if (delimiter) return format(date).replaceAll(".", delimiter)
    return format(date)
}