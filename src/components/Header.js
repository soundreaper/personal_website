import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-paper-plane"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Subal Pant</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Other</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <ul className="icons">
            <li><a href="https://twitter.com/soundreaper" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/soundreaper1" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/subal_pant/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.youtube.com/channel/UCuZ_CN2s1k41QASKT9jTWmw/" target="_blank" className="icon fa-youtube"><span className="label">YouTube</span></a></li>
            <li><a href="https://github.com/soundreaper" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
