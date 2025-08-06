import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MODEL_DETAILS = gql`
  query GetModelDetails($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      name
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

function ModelPage() {
  const { brandId, modelId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('specs');
  const [visibleMusicians, setVisibleMusicians] = useState(2);

  const { loading, error, data } = useQuery(GET_MODEL_DETAILS, {
    variables: { brandId, modelId },
  });

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffffff'
    },
    header: {
      backgroundColor: 'white',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #e5e7eb',
    },
    backButton: {
      color: '#6b7280',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px'
    },
    backButtonHover: {
      color: '#374151'
    },
    logo: {
      height: '28px'
    },
    heroSection: {
      position: 'relative',
      backgroundColor: 'white',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      inset: '0'
    },
    heroGradient: {
      position: 'absolute',
      right: '0',
      top: '0',
      width: '40%',
      height: '80%',
      background: 'linear-gradient(to bottom right, #fb923c, #f97316)',
      borderBottomLeftRadius: '300px',
      borderBottomRightRadius: '200px',
      borderTopLeftRadius: '100px'
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px',
      alignItems: 'center'
    },
    heroContentLarge: {
      gridTemplateColumns: '1fr 1fr'
    },
    heroText: {
      
    },
    heroTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px',
      lineHeight: '1.2'
    },
    heroTitleLarge: {
      fontSize: '3rem'
    },
    heroDescription: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    heroPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    heroPriceLabel: {
      fontSize: '1.125rem',
      fontWeight: 'normal'
    },
    heroImageContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    heroImageContainerLarge: {
      justifyContent: 'flex-end'
    },
    heroImage: {
      width: '320px',
      height: '320px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
      transform: 'translateY(-50px)'
    },
    tabsContainer: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb'
    },
    tabsWrapper: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    tabsList: {
      display: 'flex',
      justifyContent: 'center',
      gap: '64px'
    },
    tab: {
      padding: '16px 8px',
      borderBottom: '2px solid transparent',
      fontWeight: '500',
      fontSize: '14px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    tabActive: {
      borderBottomColor: '#f97316',
      color: '#ea580c'
    },
    tabInactive: {
      color: '#6b7280'
    },
    tabInactiveHover: {
      color: '#374151',
      borderBottomColor: '#d1d5db'
    },
    contentContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 24px'
    },
    specsGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '48px'
    },
    specsGridLarge: {
      gridTemplateColumns: '1fr 1fr'
    },
    specsTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '24px'
    },
    specsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      minWidth: '600px'
    },
    specItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb'
    },
    specLabel: {
      fontWeight: '500',
      color: '#6b7280'
    },
    specValue: {
      color: '#111827'
    },
    placeholder: {
      backgroundColor: '#f3f4f6',
      borderRadius: '8px',
      padding: '32px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeholderText: {
      color: '#6b7280',
      textAlign: 'center'
    },
    musiciansGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px'
    },
    musiciansGridLarge: {
      gridTemplateColumns: '1fr 1fr'
    },
    musiciansTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '24px'
    },
    musiciansDescription: {
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.6'
    },
    musiciansCards: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px'
    },
    musiciansCardsSmall: {
      gridTemplateColumns: '1fr 1fr'
    },
    musicianCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s'
    },
    musicianCardHover: {
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    musicianImageContainer: {
      aspectRatio: '1',
      backgroundColor: '#111827',
      position: 'relative',
      overflow: 'hidden'
    },
    musicianImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    musicianInfo: {
      padding: '16px'
    },
    musicianName: {
      fontWeight: '600',
      color: '#111827',
      marginBottom: '8px'
    },
    musicianBands: {
      fontSize: '14px',
      color: '#6b7280'
    },
    musicianBandsLabel: {
      fontWeight: '500'
    },
    showMoreContainer: {
      marginTop: '32px',
      textAlign: 'center'
    },
    showMoreButton: {
      backgroundColor: '#f97316',
      color: 'white',
      padding: '8px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    showMoreButtonHover: {
      backgroundColor: '#ea580c'
    },
    footer: {
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      marginTop: '64px'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 24px'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px'
    },
    footerGridMd: {
      gridTemplateColumns: 'repeat(4, 1fr)'
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
    footerSocialLinkHover: {
      color: '#6b7280'
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
    footerLinkHover: {
      color: '#111827'
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
      <p style={styles.loadingText}>Loading guitar details...</p>
    </div>
  );
  
  if (error) return (
    <div style={styles.loadingContainer}>
      <p style={styles.errorText}>Error loading guitar details.</p>
    </div>
  );

  const model = data.findUniqueModel;

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.color = styles.backButtonHover.color}
          onMouseLeave={(e) => e.target.style.color = styles.backButton.color}
        >
          <svg style={{width: '16px', height: '16px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back To List
        </button>
        <img src="/VibeString.png" alt="VibeStrings" style={styles.logo} />
      </header>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.heroGradient}></div>
        </div>
        <div style={{...styles.heroContent, ...styles.heroContentLarge}}>
          <div style={styles.heroText}>
            <h1 style={{...styles.heroTitle, ...styles.heroTitleLarge}}>
              {model.name}
            </h1>
            <p style={styles.heroDescription}>{model.description}</p>
            <p style={styles.heroPrice}>
              <span style={styles.heroPriceLabel}>Price: </span>${model.price}
            </p>
          </div>
          <div style={{...styles.heroImageContainer, ...styles.heroImageContainerLarge}}>
            <img 
              src={model.image || "/placeholder.svg"} 
              alt={model.name} 
              style={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={styles.tabsContainer}>
        <div style={styles.tabsWrapper}>
          <div style={styles.tabsList}>
            <button
              onClick={() => setActiveTab('specs')}
              style={{
                ...styles.tab,
                ...(activeTab === 'specs' ? styles.tabActive : styles.tabInactive)
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'specs') {
                  e.target.style.color = styles.tabInactiveHover.color;
                  e.target.style.borderBottomColor = styles.tabInactiveHover.borderBottomColor;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'specs') {
                  e.target.style.color = styles.tabInactive.color;
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('musicians')}
              style={{
                ...styles.tab,
                ...(activeTab === 'musicians' ? styles.tabActive : styles.tabInactive)
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'musicians') {
                  e.target.style.color = styles.tabInactiveHover.color;
                  e.target.style.borderBottomColor = styles.tabInactiveHover.borderBottomColor;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'musicians') {
                  e.target.style.color = styles.tabInactive.color;
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              Who plays it?
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={styles.contentContainer}>
        {activeTab === 'specs' && (
          <div style={styles.specsGrid}>
            <div>
              <h3 style={styles.specsTitle}>Technical Specifications</h3>
              <div style={styles.specsList}>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Body Wood:</span>
                  <span style={styles.specValue}>{model.specs.bodyWood}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Neck Wood:</span>
                  <span style={styles.specValue}>{model.specs.neckWood}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Fingerboard:</span>
                  <span style={styles.specValue}>{model.specs.fingerboardWood}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Pickups:</span>
                  <span style={styles.specValue}>{model.specs.pickups}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Tuners:</span>
                  <span style={styles.specValue}>{model.specs.tuners}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Scale Length:</span>
                  <span style={styles.specValue}>{model.specs.scaleLength}</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Bridge:</span>
                  <span style={styles.specValue}>{model.specs.bridge}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'musicians' && (
          <div style={{...styles.musiciansGrid, ...styles.musiciansGridLarge}}>
            <div>
              <h3 style={styles.musiciansTitle}>Featured Artists</h3>
              <p style={styles.musiciansDescription}>
                Discover the legendary musicians who have chosen this instrument to create their signature sound.
              </p>
            </div>
            <div>
              <div style={{...styles.musiciansCards, ...styles.musiciansCardsSmall}}>
                {model.musicians.slice(0, visibleMusicians).map((musician, index) => (
                  <div 
                    key={index} 
                    style={styles.musicianCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = styles.musicianCardHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = styles.musicianCard.boxShadow;
                    }}
                  >
                    <div style={styles.musicianImageContainer}>
                      <img 
                        src={musician.musicianImage || "/placeholder.svg"} 
                        alt={musician.name} 
                        style={styles.musicianImage}
                      />
                    </div>
                    <div style={styles.musicianInfo}>
                      <h4 style={styles.musicianName}>{musician.name}</h4>
                      <p style={styles.musicianBands}>
                        <span style={styles.musicianBandsLabel}>Bands: </span>
                        {musician.bands.join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {visibleMusicians < model.musicians.length && (
                <div style={styles.showMoreContainer}>
                  <button 
                    onClick={() => setVisibleMusicians(visibleMusicians + 2)}
                    style={styles.showMoreButton}
                    onMouseEnter={(e) => e.target.style.backgroundColor = styles.showMoreButtonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = styles.showMoreButton.backgroundColor}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{...styles.footerGrid, ...styles.footerGridMd}}>
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

export default ModelPage;
