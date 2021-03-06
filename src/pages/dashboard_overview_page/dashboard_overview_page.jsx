import React, { Component } from "react"
import DashboardCard from "../../components/dashboard_card/dashboard_card";
import DashboardTopBar from "../../components/dashboard_top_bar/dashboard_top_bar"
import Card from "../../components/card/card"
import Template from "../../components/template/template"

import "./dashboard_overview_page.scss"


class DashboardOverviewPage extends Component {


    constructor(props) {
        super(props)
        this.state = props;
    }

    overviewData = [
        { name: "Wallet", value: "1550.68 $", },
        { name: "Last month income", value: "50.68 $", },
        { name: "Income rate", value: "1.5 %", },
        { name: "Provided services", value: "76", },
    ]

    render() {

        return (
            <Template route="Dashboard">

                <div className="dashboard_body">
                    <DashboardTopBar route={"overview"} />

                    <DashboardCard label={"Overview"}>
                        <br />
                        <br />
                        <br />
                        <div className="overview_flex_card">

                            {this.overviewData.map((e) => (


                                <Card hideImg={true} mainColor="#303036">
                                    <div className="dashboard_overview_cards_container">
                                        <h1>{e.value}</h1>
                                        <h4>{e.name}</h4>
                                    </div>
                                </Card>

                            ))}

                        </div>

                    </DashboardCard>
                    <DashboardCard label={"Filter Graph"}>

                    </DashboardCard>
                </div>
            </Template>
        )
    }
}

export default DashboardOverviewPage

