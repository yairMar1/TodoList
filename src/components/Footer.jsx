import './Footer.css'

function Footer({ setFilter, filter }) {

    return (
        <div className="footer">
            <div
                className={`footer-item ${filter === 'all' ? 'marked' : ''}`}
                onClick={() => setFilter('all')}
            >
                All
            </div>
            <div
                className={`footer-item ${filter === 'active' ? 'marked' : ''}`}
                onClick={() => setFilter('active')}
            >
                Active
            </div>
            <div
                className={`footer-item ${filter === 'completed' ? 'marked' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completed
            </div>
            <div className="copyright">
                © 2025 TodoList
            </div>
        </div>
    )
}

export default Footer