import React from "react";
import "./order.scss";
import Reciept from "../../icons/outline_receipt_long_white_24dp 1.png"
import OrderStatus from "../../icons/orderStatus.png"
import { ReactComponent as FilledStar } from '../../icons/star.svg';
import { ReactComponent as ArrowDown } from "../../icons/arrow-down-sign-to-navigate.svg"
import { ReactComponent as ArrowUp } from "../../icons/arrowup.svg";
import defaultUserImg from "../../icons/defaultUser.svg";
import Zoom from 'react-reveal/Zoom';
import IconButton from "../../components/icon/icon_component";


class Order extends React.Component {


    constructor (props) {

        super(props);

        this.state = {

            toggled: false,
            cardStyle: {
                height: "12rem"
            },
            textStyle: {
                overflow: "visible"
            }
        }
    }
    expandCard = () => {

        this.setState({
            cardStyle: {
                height: "38rem",
            },
            toggled: true
        })

    }
    shrinkCard = () => {

        this.setState({
            cardStyle: {
                height: "12rem",

            },
            toggled: false
        })

    }

    getStars = (orderRate) => {
        let stars = [];

        for (let i = 1; i < orderRate; i++) {
            stars.push(<FilledStar className="filled-star" style={{ fill: "goldenrod" }} />)
        }
        return stars;
    }



    render() {


        const { giveFeedBackOnClick, cancelOnClick, order, orderType } = this.props;
        const { serviceProvider } = order
        const style = {
            backgroundImage: `url(${order.serviceProvider.imgSrc ? order.serviceProvider.imgSrc : defaultUserImg})`,
        }
        const { cardStyle, toggled } = this.state;


        return (

            <Zoom>

                <div className="order" style={cardStyle}>

                    <div className="order__user-img" style={style}></div>
                    <div className="order__info">
                        <div className="order__info__user">
                            <span className="order__info__user__name"> {order.serviceProvider.firstName + " " + order.serviceProvider.lastName}</span>
                            <span className="order__info__rating"> {order.rating} <FilledStar style={{ marginLeft: ".5rem", fill: "black", width: "2rem", height: "2rem", cursor: "pointer" }}></FilledStar>
                            </span>
                        </div>
                        <div className={`order__info__order ${toggled ? "visible" : null}`} >

                            {order.provisionDate}  ago / {order.city} / {order.paymentType}
                            <div className="order__extra-info__type">
                                <div className="order__extra-info__type__details"> <span>Type:  Mechanical</span> <span>/</span> <span>Name: Mototrs</span> <span>/</span> <span>Time: 12:00 - 15:00</span></div>
                                <div className="order__extra-info__type__details"><span>City: {order.location}</span>  <span>/</span> <span>Date: {order.provisionDate.split(" ")}</span> </div>
                                <div className="order__extra-info__type__details"><span>Diagonsing fees: {serviceProvider.diagnosingFees}$</span> <span>/</span> <span>Total fees: {order.serviceFees}$</span></div>
                                <div>Payment: {order.paymentType}</div>
                                <div >Feedback: {order.feedback}. </div>
                                <div className="rate">
                                    <span className="rate__text">Rate: </span>
                                    {this.getStars(order.rate)}
                                </div>
                            </div>
                        </div>
                        <span>
                            {
                                toggled ?
                                    <ArrowUp className="arrow arrow-down" onClick={() => this.shrinkCard()}></ArrowUp> :
                                    <ArrowDown className="arrow arrow-down" onClick={() => this.expandCard()}></ArrowDown>
                            }


                        </span>
                    </div>

                    {
                        orderType != "order-status" ? <div className="order__buttons-container">

                            {
                                order.status === "Done" ?
                                    [<button className="order__buttons-container__reciept">
                                        <img src={Reciept} alt="" />
                                    </button>,
                                    order.isFeedbackGiven ? null
                                        : <button className="order__buttons-container__feedback" onClick={() => giveFeedBackOnClick("feedback", order._id)}>Give FeedBack</button>]
                                    : null
                            }

                            {/* <button className="order__buttons-container__replay">
                                <img src={Replay} alt="" />

                            </button> */}
                        </div> : <div className="order__buttons-container">



                            <button className="order__buttons-container__reciept" style={{ marginLeft: "10rem" }}>
                                <img src={OrderStatus}></img>
                            </button>
                            <button className="order__buttons-container__feedback" onClick={() => cancelOnClick("status")}>Cancel</button>

                        </div>

                    }
                    <div className="order__current-status">
                        <IconButton
                            innerText={order.status}
                            heightDiv="4.0rem"
                            widthDiv="15.0rem"
                            borderRadius="5rem"
                            backgroundColor="white"
                            src={null}
                        />
                    </div>


                    <div className="order__extra-info">



                    </div>


                </div>
            </Zoom>
        )
    }
}


export default Order