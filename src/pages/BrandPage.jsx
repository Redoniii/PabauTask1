import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_BRAND_MODELS = gql`
  query GetBrandModels($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      price
      type
      image
    }
  }
`;

const GET_ALL_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      name
      image
    }
  }
`;

function BrandPage() {
  const { id } = useParams();
  const [filterType, setFilterType] = useState('');
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { loading: modelsLoading, error: modelsError, data: modelsData } = useQuery(GET_BRAND_MODELS, {
    variables: {
      id,
      sortBy: {
        field: 'name',
        order: 'ASC',
      },
    },
  });

  const { loading: brandsLoading, error: brandsError, data: brandsData } = useQuery(GET_ALL_BRANDS);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    },
    header: {
      backgroundColor: 'white',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #e5e7eb'
    },
    backButton: {
      color: '#6b7280',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none'
    },
    logo: {
      height: '28px'
    },
    heroSection: {
      position: 'relative',
      backgroundColor: 'white',
      overflow: 'hidden'
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 0.6fr',
      gap: '48px',
      alignItems: 'center'
    },
    heroText: {
      
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '30%',
      overflow: 'hidden',
      borderBottomLeftRadius: '300px',
      borderBottomRightRadius: '200px',
      borderTopLeftRadius: '100px'
    },
    heroGradient: {
      position: 'absolute',
      top: '-30%',
      left: '-25%',
      width: '150%',
      height: '150%',
      background: 'linear-gradient(to bottom right, #fb923c, #f97316)',
    //   transform: 'rotate(-15deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    heroBrand: {
      fontSize: '4rem',
      fontWeight: 'bold',
      color: '#111827',
      fontStyle: 'italic',
      opacity: '0.8'
    },
    heroBrandImage: {
      width: '250px',
      objectFit: 'contain',
    },
    heroImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentSection: {
      backgroundColor: 'white',
      padding: '48px 0'
    },
    contentContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#111827',
      textAlign: 'center',
      marginBottom: '32px'
    },
    sectionTitleHighlight: {
      color: '#f97316'
    },
    filtersContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '48px',
      flexWrap: 'wrap'
    },
    filterSelect: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: '#374151',
      fontSize: '14px',
      minWidth: '150px'
    },
    searchInput: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: '#374151',
      fontSize: '14px',
      minWidth: '200px'
    },
    guitarsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '48px'
    },
    guitarCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      transition: 'all 0.2s',
      textDecoration: 'none',
      color: 'inherit',
      position: 'relative'
    },
    guitarCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px 0 rgb(0 0 0 / 0.1)'
    },
    guitarImage: {
      width: '200px',
      height: '200px',
      objectFit: 'contain',
      marginBottom: '16px'
    },
    guitarName: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '8px'
    },
    guitarPrice: {
      fontSize: '1rem',
      color: '#6b7280',
      fontWeight: '500'
    },
    badge: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    badgeD: {
      backgroundColor: '#ec4899'
    },
    badgeV: {
      backgroundColor: '#10b981'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px'
    },
    paginationButton: {
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      backgroundColor: 'white',
      color: '#374151',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    paginationButtonActive: {
      backgroundColor: '#f97316',
      color: 'white',
      borderColor: '#f97316'
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

  if (modelsLoading || brandsLoading) return (
    <div style={styles.loadingContainer}>
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
  
  if (modelsError || brandsError) return (
    <div style={styles.loadingContainer}>
      <p style={styles.errorText}>Error loading data.</p>
    </div>
  );

  const brand = brandsData?.findAllBrands.find(b => b.id === id);

  // Filter and search logic
  const filteredModels = modelsData.findBrandModels.filter(model => {
    const matchesType = !filterType || model.type === filterType;
    const matchesName = !searchName || model.name.toLowerCase().includes(searchName.toLowerCase());
    return matchesType && matchesName;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedModels = filteredModels.slice(startIndex, startIndex + itemsPerPage);

  // Get unique types for filter dropdown
  const uniqueTypes = [...new Set(modelsData.findBrandModels.map(model => model.type))];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.backButton}>
          <svg style={{width: '16px', height: '16px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back To Home
        </Link>
        <img src="/VibeString.png" alt="VibeStrings" style={styles.logo} />
      </header>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.heroGradient}>
            <div style={styles.heroImageContainer}>
              <img src={brand?.image} alt={brand?.name} style={styles.heroBrandImage} />
            </div>
          </div>
        </div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Play like a <span style={{color: '#f97316'}}>Rock star</span>
            </h1>
            <p style={styles.heroSubtitle}>
              With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, 
              Ibanez guitars are built to play fast, sound bold, and stand out on any stage.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <h2 style={styles.sectionTitle}>
            Check out the <span style={styles.sectionTitleHighlight}>Selection</span>
          </h2>

          {/* Filters */}
          <div style={styles.filtersContainer}>
            <select 
              style={styles.filterSelect}
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">Filter by type</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by name"
              style={styles.searchInput}
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Guitars Grid */}
          <div style={styles.guitarsGrid}>
            {paginatedModels.map((model) => {
              return (
                <Link 
                  key={model.id} 
                  to={`/brand/${id}/model/${model.id}`}
                  style={styles.guitarCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.guitarCardHover.transform;
                    e.currentTarget.style.boxShadow = styles.guitarCardHover.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = styles.guitarCard.boxShadow;
                  }}
                >
                  <img 
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    style={styles.guitarImage}
                  />
                  <h3 style={styles.guitarName}>{model.name}</h3>
                  <p style={styles.guitarPrice}>${model.price}</p>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={styles.pagination}>
              {currentPage > 1 && (
                <button 
                  style={styles.paginationButton}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              )}
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  style={{
                    ...styles.paginationButton,
                    ...(currentPage === index + 1 ? styles.paginationButtonActive : {})
                  }}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              {currentPage < totalPages && (
                <button 
                  style={styles.paginationButton}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </div>
          )}
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

export default BrandPage;
