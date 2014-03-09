function EnvoiSMS() {
var label = GmailApp.getUserLabelByName('SMS');
var threads = label.getThreads();
var now = new Date().getTime();
for(i in threads)
CalendarApp.createEvent('URGENT '+threads[i].getFirstMessageSubject(), new Date(now+60000), new Date(now+60000)).addSmsReminder(0);
label.removeFromThreads(threads);
}
