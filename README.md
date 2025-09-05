# HP Papers Pakistan - Official Sole Distributor Website

A modern, responsive website for HP Papers Pakistan, the official sole distributor of HP Papers in Pakistan. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for business users
- **Responsive Layout**: Mobile-first design that works on all devices
- **E-commerce Ready**: Built with shopping cart functionality and product management
- **Performance Optimized**: Fast loading with Next.js 14 and optimized images
- **SEO Friendly**: Built-in SEO optimization and meta tags
- **Contact Forms**: Interactive contact forms with validation
- **Product Catalog**: Comprehensive product showcase with filtering and search

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
hp-papers-pakistan/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── about/             # About us page
│   ├── contact/           # Contact page
│   └── shop/              # E-commerce shop page
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Design Features

- **Color Scheme**: Professional blue-based color palette inspired by HP branding
- **Typography**: Clean, readable Inter font family
- **Layout**: Card-based design with subtle shadows and borders
- **No Gradients**: Clean, flat design as requested
- **Responsive**: Mobile-first approach with breakpoint optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hp-papers-pakistan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home Page (`/`)
- Hero section with company introduction
- Feature highlights
- Popular products showcase
- Call-to-action sections

### Products Page (`/products`)
- Complete product catalog
- Category filtering
- Product specifications
- Search functionality

### About Us (`/about`)
- Company story and mission
- Team information
- Company values and statistics
- Partnership details

### Contact (`/contact`)
- Contact form with validation
- Company contact information
- Business hours and location
- Support channels

### Shop (`/shop`)
- E-commerce functionality
- Product filtering and sorting
- Grid/list view options
- Shopping cart integration (ready for backend)

## 🛒 E-commerce Features

The website is built with e-commerce functionality in mind:

- **Product Catalog**: Comprehensive product listings
- **Shopping Cart**: Ready for cart management
- **Product Filtering**: By category, GSM, size, and price
- **Search Functionality**: Product search capabilities
- **Responsive Design**: Optimized for mobile shopping
- **Payment Ready**: Structure ready for payment gateway integration

## 🎯 Target Audience

- **Businesses**: Offices, printing companies, educational institutions
- **Individuals**: Home users, students, professionals
- **Bulk Buyers**: Large organizations requiring paper supplies
- **Distributors**: Sub-distributors and resellers

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder
3. Configure redirects for Next.js routing

### Other Platforms
- AWS Amplify
- DigitalOcean App Platform
- Any static hosting service

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update company information in components
- Modify product data in shop and products pages
- Customize contact details and business hours

### Styling
- Modify `app/globals.css` for custom styles
- Update component classes for design changes
- Add new Tailwind utilities as needed

## 📞 Support

For technical support or customization requests:
- Email: [your-email@domain.com]
- GitHub Issues: [repository-issues-url]

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- HP Papers for product information
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set

---

**Built with ❤️ for HP Papers Pakistan** 