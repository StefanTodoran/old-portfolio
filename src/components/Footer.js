import React, {Component} from 'react';
import './Components.css';

export class Footer extends Component {
    state = {
        middle: 0,
    }

    componentDidMount() {
        if (!this.props.mobile) {
            window.addEventListener('scroll', this.handleScroll);
            this.setState({
                middle: document.documentElement.clientHeight / 2.5,
            })
        }
    }

    handleScroll = () => {
        this.handleParallax('.fin','.finContainer');
    }

    handleParallax(image, description) {
        const parallax = document.querySelector(image);
        const anchor = document.querySelector(description);
        let diff = this.state.middle - this.getMiddle(anchor.getBoundingClientRect());
        parallax.style.transform = `translateY(${diff * -.5}px)`;
    }

    getMiddle(element) {
        return ((element.top + element.bottom) / 2);
    }

    render() {
        return (
            <div className={"footerContainer"}>
                {!this.props.mobile && <div className={"finContainer"}>
                    <div className={"fin"}>FIN</div>
                </div>}
                <div className={"longLine"}/>
                <br/>
                <div className={"footerText"}>
                    <div>© Stefan Todoran</div>
                    <div>Last Updated 4/29/22</div>
                </div>
                <br/>
            </div>
        );
    }
}