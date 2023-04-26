export const ticketStatus = (ticket) => {
    // const [ticket, setTicket] = useState({})
    // const fetchTicket = () => {
    //     getTicketById(ticketId)
    //         .then((res) => setTicket(res))
    // }

    // useEffect(
    //     () => {
    //         fetchTicket()
    //     },
    //     [ticketId]
    // )
    if (ticket.date_completed === null) {
        if (ticket.employee) {
            return <span className="status--in-progress">In progress</span>
        }
        return <span className="status--new">Unclaimed</span>
    }
    return <span className="status--completed">Done</span>
}