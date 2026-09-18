# PetStay Frontend Demo

A responsive static front-end prototype for a pet boarding and stay management platform. The project includes a customer-facing booking experience, admin dashboard, booking management screens, and a demo check-in flow for presentation purposes.

## Overview

This repository is designed to demonstrate the PetStay product experience visually and functionally in a browser without requiring any live backend services. It is suitable for portfolio presentation, UI prototyping, and frontend demos.

## Key Features

- Split landing page for Customer and Admin entry
- Booking form for pet stay reservations
- Booking confirmation screen with generated demo booking ID
- Admin dashboard with sample analytics cards and guest table
- Manage Bookings screen with static booking records
- Check-in demo page
- Fully static local front-end experience

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Static front-end mockup

## Project Structure

```text
.
├── index.html
├── checkin.html
├── admin-frontend/
│   ├── admin_dashboard.html
│   ├── manage_bookings.html
│   ├── post-login.html
├── customer/
│   ├── AI-Booking.html
│   ├── booking-success.html
│   ├── new-booking.html
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── images/
│   └── js/
├── robots.txt
├── package.json
├── gulpfile.js
├── README.md
└── .gitignore
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Run the site locally

```bash
python -m http.server 8000
```

### 3. Open in browser

```text
http://localhost:8000/
```

## Demo Flow

1. Open the landing page.
2. Click Customer to go to the booking form.
3. Fill in the booking details and submit.
4. View the booking success page.
5. Use the admin pages to review the demo dashboard and manage bookings.

## Notes

This project is intentionally implemented as a static frontend demo. It does not include live authentication, database storage, or external cloud backend processing unless the project is later connected to a real backend.

## License

This project is intended for educational and demo use.

## Credits

Designed and Developed by Shivani Varu
