import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles

function Calendario () {
    return (
        <Kalend
    //   onEventClick={onEventClick}
    //   onNewEventClick={onNewEventClick}
      events={[]}
    //   initialDate={new Date().toISOString()}
    //   hourHeight={60}
      initialView={CalendarView.DAY}
    //   disabledViews={[CalendarView.DAY]}
    //   onSelectView={onSelectView}
    //   selectedView={selectedView}
    //   onPageChange={onPageChange}
    //   timeFormat={'24'}
    //   weekDayStart={'Monday'}
    //   calendarIDsHidden={['work']}
    selectedView={CalendarView.MONTH}
      language={'ptBR'}
    />
    )

}

export default Calendario