import React, { Component } from "react"
import DashboardCard from "../../components/dashboard_card/dashboard_card"
import Card from "../../components/card/card"
import IconButton from "../../components/icon/icon_component"
import profileIcon from "../../components/profile_card/Ellipse (3).svg";
import star from "./outline_star_black_24dp 1.svg";

import "./manage_proposals.scss"

class ManageProposals extends Component {

    constructor({ props }) {
        super(props)
        this.props = props
    }

    data = [
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
        { name: "husam Mousa", status: false },
        { name: "Ahmad Mousa", status: false },
    ]

    onClickCard = (event) => {

        const target = event.target.closest(".profile_card").lastChild
        target.classList.toggle("show_card")
    }
    render() {

        return (
            <DashboardCard label={"Orders history"} >

                <div className="list_of_cards">

                    {
                        this.data.map(prop => (
                            [
                                <Card imgHeight="15.0rem" imgWidth="15.0rem" image_src={profileIcon} imgHsize="8rem" imgWsize="8rem" data={prop.name} callback={this.onClickCard}>

                                    <div className="order_header_card">
                                        <div className="order_header_card_left">
                                            <div className="part_one">
                                                <h3>{prop.name}</h3>
                                                <div className="rate_div">
                                                    <h3>4.5</h3>
                                                    <img src={star} alt="" />
                                                </div>
                                            </div>
                                            <h3>27 minutes ago / Johor Bahru / Cash</h3>
                                        </div>
                                        <div className="right_float_button">
                                            <IconButton innerText={"Cancel"} heightDiv="4.0rem" widthDiv="15.0rem"
                                                borderRadius="5rem" backgroundColor="#1E2833" src={null} />
                                        </div>
                                        <div className="proposal_status">
                                            <h3>Pendding</h3>
                                        </div>
                                    </div>
                                    <div className="toggle_card">
                                        <h3>Type: Mechanical / Name: Motors / Time: 12:00 - 15:00</h3>
                                        <h3>City: Makkah / Day: Sunday / Date: 15/12/1999</h3>
                                        <h3>Diagnosing fees: 15.00 $ / Total fees: 50.00 $</h3>
                                        <h3>Payment: Cash</h3>
                                        <h3>Feedback: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia officiis ipsum. Praesentium, consequuntur. Mollitia aspernatur quibusdam cupiditate laboriosam quis?</h3>
                                        <h3>Rate: 3</h3>
                                    </div>
                                </Card>,
                                <br />
                            ]))
                    }
                </div>


            </DashboardCard>)
    }
}
export default ManageProposals