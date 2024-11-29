# Bujnicka-Dent

This project is a **frontend application** designed to streamline appointment scheduling and management in the [Bujnicka-Dent](https://bujnicka-dent.pl/) dental practice. It provides tools for patients to book visits independently and helps staff manage their schedules efficiently.

> [!IMPORTANT] 
> This repository contains the **frontend application** only. The database, REST API, and mobile application source code are not publicly available due to security and privacy considerations.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Database Design](#database-design)
- [Future Enhancements](#future-enhancements)
- [Live Website](#live-website)

---

## Overview
The application was developed for the **_Bujnicka-Dent_ dental practice** to simplify the appointment booking process. It reduces the workload on staff by allowing patients to schedule visits online, ensures centralized data management for the practice, and prioritizes security for sensitive information.

In addition to its appointment management functionality, this web app also serves as a [**website**](https://bujnicka-dent.pl/) that provides an overview of the dental practice, crucial information, and pricing details.

The system includes:
- A **web application** for patients to view practice information and to book an appointment.
- A **mobile application** for staff to oversee and manage appointments (not included in this repository).
- A **centralized server** with a REST API (not included in this repository).
- A **secure database** for storing operational data (not included in this repository).

---

## Features
### Patient Functionality
- View the dental practice overview, gather crucial information, and contact information.
- Access the pricing list.
- View available times and book appointments online without account creation.

### Staff Functionality
- View and manage schedules.
- Add, edit, or cancel appointments.
- Receive notifications for schedule changes.

### Admin Functionality
- Full control over pricing, staff management, and appointment scheduling.

---

## Technologies Used
### Frontend
- [**React**](https://react.dev/) with [**JavaScript**](https://developer.mozilla.org/docs/Web/JavaScript) for the web application.
- [**SCSS**](https://sass-lang.com/) for styling.

### Mobile (not included)
- [**React Native**](https://reactnative.dev/) for cross-platform support.

### Backend (not included)
- **REST API** for handling data interactions between the frontend, and backend.
- **Relational Database** for structured data management.
- **Token-based Authentication** for secure access.
- **Encryption** for protecting sensitive information.

---

## System Architecture
The system consists of four main components:
1. **Web Application**: A user-friendly interface for patients to book appointments and view information.
2. **Mobile Application**: A secure interface for staff to manage the pactice (not included in this repository).
3. **REST API**: Connects the web and mobile applications to the database (not included in this repository).
4. **Database**: Stores all data related to appointments, staff, and pricing (not included in this repository).

---

## Database Design
The system uses a relational database to store structured data securely. Key entities include data models for managing users, appointments, schedules, and pricing. Relationships between these entities are designed to ensure data consistency and integrity while supporting the system's core functionalities.

Sensitive information, such as user credentials, patient and medical details, is stored using encryption, and access is restricted based on user roles.

---

## Future Enhancements
- [ ] Add patient accounts for storing medical history and appointment history.
- [x] Expand the pricing module to include dynamic options.
- [ ] Implement full **encrypted medical record**.
- [ ] Support multi-language interfaces for broader accessibility.

---

## Live Website
Visit the live application at: [Bujnicka-Dent](https://bujnicka-dent.pl/)

---

## Contributors
- **Bartosz Art** 
