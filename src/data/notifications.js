const notifications = [
  { id: 1, time: "12 days ago", type: "RulesSoftBreach", message: "Closed trade not placed with a stop-loss." },
  { id: 2, time: "8 days ago", type: "RulesSoftBreach", message: "Days since a trade was placed, closed after alert." },
  { id: 3, time: "5 days ago", type: "Info", message: "Your account equity is below 50% margin." },
  { id: 4, time: "3 days ago", type: "Warning", message: "Unusual trade volume detected." },
  { id: 5, time: "2 days ago", type: "Error", message: "Login attempt failed. Account locked." },
  { id: 6, time: "1 day ago", type: "Info", message: "Scheduled system maintenance at midnight." },
  { id: 7, time: "6 hours ago", type: "RulesSoftBreach", message: "Trade executed without adequate funds." },
  { id: 8, time: "3 hours ago", type: "Info", message: "New updates available for your trading software." },
  { id: 9, time: "Just now", type: "Success", message: "Trade executed successfully." },
];

export default notifications;
