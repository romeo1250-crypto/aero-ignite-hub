# AeroLabz - Advanced Drone Solutions Platform

A modern e-commerce platform specializing in drone technology, built with React, TypeScript, and Supabase.



## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Backend Architecture](#backend-architecture)
- [Payment Integration](#payment-integration)
- [Admin Panel](#admin-panel)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### 🛒 E-Commerce Platform
- **Product Catalog**: Complete drone product showcase with detailed specifications
- **Shopping Cart**: Persistent cart functionality for authenticated and guest users
- **Checkout System**: Comprehensive checkout with address management
- **Order Management**: Full order lifecycle tracking and management
- **Inventory Management**: SKU-based inventory with stock tracking
- **Category Management**: Hierarchical product categorization

### 💳 Payment Processing
- **M-Pesa Integration**: Native mobile money payment support for Kenyan market
- **Payment Validation**: Automated payment status verification
- **Order Tracking**: Real-time payment and fulfillment status updates

### 👥 User Management
- **Authentication**: Secure user registration and login via Supabase Auth
- **User Profiles**: Comprehensive user profile management
- **Address Book**: Multiple shipping and billing address management
- **Role-Based Access**: Customer and admin role differentiation

### 📝 Content Management
- **Blog System**: Full-featured blog with admin management
- **Dynamic Content**: SEO-optimized content management
- **Media Management**: Image and file upload capabilities

### 📊 Analytics & Admin
- **Admin Dashboard**: Comprehensive admin panel for business management
- **Analytics Tracking**: User behavior and business metrics tracking
- **Product Management**: Full CRUD operations for products and SKUs
- **Order Management**: Order processing and fulfillment tracking

### 🎨 User Experience
- **Responsive Design**: Mobile-first, responsive design across all devices
- **Modern UI**: Beautiful, accessible interface built with shadcn/ui
- **Dark/Light Mode**: Theme switching capability
- **SEO Optimized**: Search engine optimized pages and content

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Router** - Client-side routing
- **TanStack Query** - Server state management

### Backend
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Robust relational database
- **Row Level Security (RLS)** - Database-level security policies
- **Edge Functions** - Serverless functions for custom logic
- **Real-time Subscriptions** - Live data updates

### Payment Integration
- **M-Pesa API** - Mobile money payment processing
- **Safaricom STK Push** - Direct mobile payment initiation

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **GitHub** - Code repository and collaboration

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── admin/           # Admin-specific components
│   └── chatbot/         # Customer support chat
├── pages/               # Route components
│   ├── Home.tsx         # Landing page
│   ├── Shop.tsx         # Product catalog
│   ├── Auth.tsx         # Authentication
│   ├── Admin.tsx        # Admin dashboard
│   └── ...             # Other pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── integrations/        # External service integrations
│   └── supabase/        # Supabase client and types
└── assets/              # Static assets

supabase/
├── functions/           # Edge functions
│   ├── mpesa-payment/   # M-Pesa payment processing
│   ├── mpesa-callback/  # Payment callback handling
│   └── check-payment-status/ # Payment verification
└── config.toml          # Supabase configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Development Workflow

- **Local Development**: Use `npm run dev` for hot-reload development
- **Building**: Use `npm run build` for production builds
- **Linting**: Use `npm run lint` to check code quality

## 🗄 Backend Architecture

### Database Schema

#### Core Tables
- **products**: Product catalog with specifications and media
- **skus**: Stock Keeping Units with pricing and inventory
- **categories**: Hierarchical product categorization
- **orders**: Customer order records
- **order_items**: Individual items within orders
- **cart_items**: Shopping cart persistence

#### User Management
- **profiles**: Extended user information beyond auth
- **addresses**: Customer shipping and billing addresses

#### Content & Analytics
- **blogs**: Blog posts and content management
- **analytics_events**: User behavior tracking
- **mpesa_transactions**: Payment transaction records

### Security Features
- **Row Level Security (RLS)**: Database-level access control
- **Role-based Permissions**: Admin vs customer access levels
- **Secure API Endpoints**: Protected edge functions
- **Input Validation**: Comprehensive data validation

## 💳 Payment Integration

### M-Pesa Integration
The platform integrates with Safaricom's M-Pesa API for mobile money payments:

- **STK Push**: Automated payment prompts to customer phones
- **Callback Handling**: Secure payment status notifications
- **Status Verification**: Real-time payment confirmation
- **Transaction Logging**: Comprehensive payment audit trail

### Edge Functions
- `mpesa-payment`: Initiates STK push payments
- `mpesa-callback`: Handles payment status callbacks
- `check-payment-status`: Verifies payment completion

## 👨‍💼 Admin Panel

### Features
- **Product Management**: Add, edit, and manage drone products
- **Order Processing**: View and process customer orders
- **Blog Management**: Create and publish blog content
- **User Management**: View customer profiles and activity
- **Analytics Dashboard**: Business metrics and insights

### Access
Admin features are protected by role-based authentication. Admin users can access the full management interface at `/admin`.


### Custom Domain
Connect your own domain through Project Settings → Domains (requires paid plan).

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your fork and create a pull request

### Coding Standards
- Follow TypeScript best practices
- Use semantic commit messages
- Maintain test coverage
- Follow the existing code style



## 📄 License

This project is proprietary and confidential. All rights reserved.
