import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Gem, Truck, MessageCircleQuestion } from 'lucide-react';

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_BRANDS);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    },
    header: {
      backgroundColor: 'white',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: '1px solid #e5e7eb'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoIcon: {
      width: '24px',
      height: '24px',
      backgroundColor: '#f97316',
      borderRadius: '4px'
    },
    logoText: {
      fontWeight: '600',
      color: '#374151'
    },
    heroSection: {
      position: 'relative',
      backgroundColor: 'white',
      overflow: 'hidden',
      padding: '50px 0'
    },
    heroBackground: {
      position: 'absolute',
      inset: '0'
    },
    heroGradient: {
      position: 'absolute',
      right: '0',
      top: '0',
      width: '35%',
      height: '90%',
      background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
      borderBottomLeftRadius: '360px',
      borderBottomRightRadius: '151px',
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    },
    heroText: {
      zIndex: 10
    },
    heroLogo: {
      height: '30px',
      marginBottom: '16px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroTitleHighlight: {
      color: '#f97316'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.6'
    },
    heroImageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      zIndex: 5
    },
    heroImage: {
      width: '420px',
      height: '380px',
      objectFit: 'cover',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '131px',
      borderBottomLeftRadius: '250px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    },
    brandsSection: {
      backgroundColor: '#f9fafb',
      padding: '80px 0'
    },
    brandsContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    brandsTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      textAlign: 'center',
      marginBottom: '64px'
    },
    brandsTitleHighlight: {
      color: '#f97316'
    },
    brandsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '48px',
      alignItems: 'center'
    },
    brandItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      textDecoration: 'none',
      transition: 'all 0.2s'
    },
    brandItemHover: {
      transform: 'scale(1.05)'
    },
    brandLogo: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#6b7280',
      fontStyle: 'italic'
    },
    brandImage: {
      height: '80px',
      width: '150px',
      objectFit: 'contain',
      filter: 'grayscale(100%)',
      opacity: 0.7,
      transition: 'all 0.3s ease-in-out'
    },
    featureSection: {
      backgroundColor: '#111827',
      padding: '80px 0',
      color: 'white'
    },
    featureContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '48px',
      textAlign: 'center'
    },
    featureItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    featureIcon: {
      marginBottom: '24px',
      color: '#f97316'
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '12px'
    },
    featureDescription: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    appSection: {
      backgroundColor: 'white',
      padding: '80px 0'
    },
    appContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    },
    appText: {
          
    },
    appTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    appTitleHighlight: {
      color: '#f97316'
    },
    appSubtitle: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.6'
    },
    appButtons: {
      display: 'flex',
      gap: '16px'
    },
    appButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      backgroundColor: '#111827',
      color: 'white',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s'
    },
    appButtonHover: {
      backgroundColor: '#374151'
    },
    appImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    appImage: {
      width: '400px',
      height: '500px',
      objectFit: 'contain'
    },
    footer: {
      backgroundColor: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
      padding: '48px 0'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px'
    },
    footerBrand: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px'
    },
    footerBrandIcon: {
      width: '24px',
      height: '24px',
      backgroundColor: '#f97316',
      borderRadius: '4px'
    },
    footerBrandText: {
      fontWeight: '600',
      color: '#374151'
    },
    footerDescription: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px'
    },
    footerSocial: {
      display: 'flex',
      gap: '12px'
    },
    footerSocialLink: {
      color: '#9ca3af',
      textDecoration: 'none'
    },
    footerTitle: {
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px'
    },
    footerList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    footerLink: {
      fontSize: '14px',
      color: '#6b7280',
      textDecoration: 'none'
    },
    footerBottom: {
      borderTop: '1px solid #e5e7eb',
      marginTop: '32px',
      paddingTop: '32px',
      textAlign: 'center'
    },
    footerCopyright: {
      fontSize: '14px',
      color: '#6b7280'
    },
    loadingContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loadingText: {
      fontSize: '1.125rem'
    },
    errorText: {
      fontSize: '1.125rem',
      color: '#dc2626'
    }
  };

  if (loading) return (
    <div style={styles.loadingContainer}>
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
  
  if (error) return (
    <div style={styles.loadingContainer}>
      <p style={styles.errorText}>Error loading brands</p>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      {/* <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}></div>
          <span style={styles.logoText}>VibeStrings</span>
        </div>
      </header> */}

      {/* Hero Section */}
      <div style={styles.heroSection}>
        {/* <div style={styles.heroBackground}>
          <div style={styles.heroGradient}></div>
        </div> */}
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <img src="/VibeString.png" alt="VibeStrings Logo" style={styles.heroLogo} />
            <h1 style={styles.heroTitle}>
              Browse top quality{' '}
              <span style={styles.heroTitleHighlight}>Guitars</span> online
            </h1>
            <p style={styles.heroSubtitle}>
              Discover the finest collection of guitars from world-renowned brands. 
              Whether you're a beginner or a professional, find the perfect instrument 
              to express your musical creativity.
            </p>
          </div>
          <div style={styles.heroImageContainer}>
            <img 
              src="/guitar12.jpg"
              alt="Guitar and Amplifier"
              style={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div style={styles.brandsSection}>
        <div style={styles.brandsContainer}>
          <h2 style={styles.brandsTitle}>
            Featuring the <span style={styles.brandsTitleHighlight}>Best Brands</span>
          </h2>
          <div style={styles.brandsGrid}>
            {data.findAllBrands.map((brand) => (
              <Link 
                key={brand.id} 
                to={`/brand/${brand.id}`}
                style={styles.brandItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.brandItemHover.transform;
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'grayscale(0%)';
                    img.style.opacity = 1;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'grayscale(100%)';
                    img.style.opacity = 0.7;
                  }
                }}
              >
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  style={styles.brandImage} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div style={styles.featureSection}>
        <div style={styles.featureContainer}>
          <div style={styles.featureItem}>
            <Gem size={48} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>PREMIUM INSTRUMENTS</h3>
            <p style={styles.featureDescription}>
              Handpicked guitars from the world's most trusted manufacturers
            </p>
          </div>
          <div style={styles.featureItem}>
            <Truck size={48} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>FAST DELIVERY</h3>
            <p style={styles.featureDescription}>
              Quick and secure shipping to get your guitar to you safely
            </p>
          </div>
          <div style={styles.featureItem}>
            <MessageCircleQuestion size={48} style={styles.featureIcon} />
            <h3 style={styles.featureTitle}>EXPERT GUIDANCE</h3>
            <p style={styles.featureDescription}>
              Professional advice to help you choose the perfect instrument
            </p>
          </div>
        </div>
      </div>

      {/* App Section */}
      <div style={styles.appSection}>
        <div style={styles.appContainer}>
          <div style={styles.appText}>
            <h2 style={styles.appTitle}>
              Browse and buy your{' '}
              <span style={styles.appTitleHighlight}>favorite guitars</span> with 
              VibeStrings.
            </h2>
            <p style={styles.appSubtitle}>
              Take your guitar shopping experience mobile with our intuitive app. 
              Browse, compare, and purchase guitars anytime, anywhere.
            </p>
            <div style={styles.appButtons}>
              <a 
                href="#" 
                style={styles.appButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = styles.appButtonHover.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = styles.appButton.backgroundColor;
                }}
              >
                <svg style={{width: '20px', height: '20px'}} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </a>
              <a 
                href="#" 
                style={styles.appButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = styles.appButtonHover.backgroundColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = styles.appButton.backgroundColor;
                }}
              >
                <svg style={{width: '20px', height: '20px'}} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
          <div style={styles.appImageContainer}>
            <img 
              src="/mobile.png"
              alt="Mobile App"
              style={styles.appImage}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerBrand}>
                <div style={styles.footerBrandIcon}></div>
                <span style={styles.footerBrandText}>VibeStrings</span>
              </div>
              <p style={styles.footerDescription}>Premium musical instruments for professionals and enthusiasts.</p>
            </div>
            
            <div>
              <h4 style={styles.footerTitle}>PAGES</h4>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>Home</a></li>
                <li><a href="#" style={styles.footerLink}>About</a></li>
                <li><a href="#" style={styles.footerLink}>Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={styles.footerTitle}>PRODUCT</h4>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>Guitars</a></li>
                <li><a href="#" style={styles.footerLink}>Basses</a></li>
                <li><a href="#" style={styles.footerLink}>Amplifiers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={styles.footerTitle}>FOLLOW US</h4>
              <ul style={styles.footerList}>
                <li><a href="#" style={styles.footerLink}>Facebook</a></li>
                <li><a href="#" style={styles.footerLink}>Twitter</a></li>
                <li><a href="#" style={styles.footerLink}>Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>© 2024 Copyright VibeStrings</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
