import { useMemo, useState } from "react";
import { useRef } from 'react';


const INITIAL_POSTS = [
  {
    id: 1,
    type: 'announcement', // 'announcement' or 'material'
    isPinned: true,
    title: 'Welcome to the Team Workspace!',
    content: 'All official course materials, schedules, and sudden updates will be posted here directly by the admin. Make sure to check back daily.',
    date: 'July 15, 2026',
    author: 'Alex Mercer (Admin)',
    file: null,
  },
 
];
export default function GroupDetail() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [filter, setFilter] = useState('all'); // 'all', 'announcement', 'material'
  const [searchQuery, setSearchQuery] = useState('');
  const [acknowledgedPosts, setAcknowledgedPosts] = useState({});

  // Toggle "Got it!" read receipts
  const handleAcknowledge = (id) => {
    setAcknowledgedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter and Search logic computed dynamically
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesFilter = filter === 'all' || post.type === filter;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [posts, filter, searchQuery]);

  // Separate pinned posts from general posts
  const pinnedPosts = useMemo(() => filteredPosts.filter(p => p.isPinned), [filteredPosts]);
  const regularPosts = useMemo(() => filteredPosts.filter(p => !p.isPinned), [filteredPosts]);
const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1>Admin Announcement & Material Hub</h1>
        <p>Stay up to date with the latest resources from your administrator.</p>
      </header>

      <div style={styles.layout}>
        {/* LEFT COLUMN: FEED */}
        <main style={styles.mainFeed}>
          {/* Controls: Search & Filter Tabs */}
        

          {/* Pinned Posts Section */}
          {pinnedPosts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              isAcknowledged={!!acknowledgedPosts[post.id]} 
              onAcknowledge={handleAcknowledge} 
            />
          ))}

          {/* Regular Feed Section */}
          {regularPosts.length > 0 ? (
            regularPosts.map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                isAcknowledged={!!acknowledgedPosts[post.id]} 
                onAcknowledge={handleAcknowledge} 
              />
            ))
          ) : (
            <div style={styles.emptyState}>No updates found matching your search.</div>
          )}
        </main>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside style={styles.sidebar}>
       

          <div style={styles.sidebarCard}>
            <h3>Material</h3>
           <div >
            Title 
            link
           </div>
           
              
          </div>
        </aside>
      </div>
    </div>
    
  );
}
function PostCard({ post, isAcknowledged, onAcknowledge }) {
  return (
    <div style={{
      ...styles.card,
      ...(post.isPinned ? styles.pinnedCard : {})
    }}>
      <div style={styles.cardHeader}>
        <span style={{
          ...styles.badge,
          ...(post.type === 'announcement' ? styles.announcementBadge : styles.materialBadge)
        }}>
          {post.isPinned ? '📌 PINNED ' : ''}
          {post.type.toUpperCase()}
        </span>
        <span style={styles.cardDate}>{post.date}</span>
      </div>

      <h2 style={styles.cardTitle}>{post.title}</h2>
      <p style={styles.cardContent}>{post.content}</p>

      {/* Conditional File Download UI */}
      {post.file && (
        <div style={styles.fileContainer}>
          <div style={styles.fileInfo}>
            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📄</span>
            <div>
              <div style={styles.fileName}>{post.file.name}</div>
              <div style={styles.fileSize}>{post.file.size}</div>
            </div>
          </div>
          <a href={post.file.url} style={styles.downloadButton}>Download</a>
        </div>
      )}

      {/* Interaction Footer */}
      <div style={styles.cardFooter}>
        <span style={styles.authorText}>Posted by {post.author}</span>
        <button 
          onClick={() => onAcknowledge(post.id)} 
          style={{
            ...styles.ackButton,
            ...(isAcknowledged ? styles.ackButtonActive : {})
          }}
        >
          {isAcknowledged ? '✅ Acknowledged' : '👍 Got it!'}
        </button>
      </div>
    </div>
  );
}
const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '2.5fr 1fr',
    gap: '30px',
  },
  mainFeed: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  controlsCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  searchInput: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
  },
  tabButton: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #cbd5e1',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
  },
  activeTab: {
    backgroundColor: '#0f172a',
    color: 'white',
    borderColor: '#0f172a',
  },
  card: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
  },
  pinnedCard: {
    borderColor: '#3b82f6',
    backgroundColor: '#f0f7ff',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  badge: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
  announcementBadge: {
    backgroundColor: '#fee2e2',
    color: '#ef4444',
  },
  materialBadge: {
    backgroundColor: '#dcfce7',
    color: '#22c55e',
  },
  cardDate: {
    fontSize: '0.85rem',
    color: '#64748b',
  },
  cardTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.3rem',
    color: '#1e293b',
  },
  cardContent: {
    color: '#334155',
    lineHeight: '1.5',
    margin: '0 0 20px 0',
  },
  fileContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  fileInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  fileName: {
    fontWeight: '600',
    fontSize: '0.9rem',
    color: '#334155',
  },
  fileSize: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  downloadButton: {
    textDecoration: 'none',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '15px',
  },
  authorText: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontStyle: 'italic',
  },
  ackButton: {
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.85rem',
    transition: 'all 0.2s',
  },
  ackButtonActive: {
    backgroundColor: '#dcfce7',
    borderColor: '#22c55e',
    color: '#15803d',
  },
  sidebarCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
  },
  sidebarItem: {
    marginBottom: '10px',
    color: '#475569',
    fontSize: '0.9rem',
  },
  categoryList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  categoryLink: {
    display: 'block',
    padding: '8px 0',
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px',
    color: '#64748b',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  }
};


