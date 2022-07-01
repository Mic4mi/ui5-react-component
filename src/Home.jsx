import React, { useState } from "react";
import {
    Card,
    CardHeader,
    Text,
    List,
    StandardListItem,
    ValueState,
    ProgressIndicator,
    Title,
    TitleLevel,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { DonutChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/donut-chart.js';
import "@ui5/webcomponents-icons/dist/person-placeholder.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";
import { useNavigate } from "react-router-dom";


const dataset = [
    {
        month: "January",
        data: 65
    },
    {
        month: "February",
        data: 59
    },
    {
        month: "March",
        data: 80
    },
    {
        month: "April",
        data: 81
    },
    {
        month: "May",
        data: 56
    },
    {
        month: "June",
        data: 55
    },
    {
        month: "July",
        data: 40
    }
];

const tableData = new Array(500).fill(null).map((_, index) => {
    return {
        name: `name${index}`,
        age: Math.floor(Math.random() * 100),
        friend: {
            name: `friend.Name${index}`,
            age: Math.floor(Math.random() * 100)
        }
    };
});

const tableColumns = [
    {
        Header: "Name",
        accessor: "name" // String-based value accessors!
    },
    {
        Header: "Age",
        accessor: "age"
    },
    {
        Header: "Friend Name",
        accessor: "friend.name"
    },
    {
        Header: "Friend Age",
        accessor: "friend.age"
    }
];

export function Home() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
            }, 2000);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("lineChart");
            }, 2000);
        }
    };
    const navigate = useNavigate();
    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };
    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Donut Chart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Donut Chart' : 'Line Chart';

    return (
        <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            wrap={FlexBoxWrap.Wrap}
            style={spacing.sapUiContentPadding}
        >
            <Card
                header={
                    <CardHeader
                        titleText="Stock Prices"
                        subtitleText={`Click here to switch to ${switchToChart}`}
                        tooltip="Toggle chart"
                        interactive
                        onClick={handleHeaderClick}
                        avatar={
                            <Icon
                                name={
                                    toggleCharts === "lineChart"
                                        ? "line-chart"
                                        : "donut-chart"
                                }
                            />
                        }
                    />
                }
                style={{ width: "300px", ...spacing.sapUiContentPadding, ...spacing.sapUiTinyMarginTop }}
            >
                <Text style={spacing.sapUiContentPadding}>
                    {contentTitle}
                </Text>
                {toggleCharts === "lineChart" ? (
                    <LineChart
                        dimensions={[{ accessor: "month" }]}
                        measures={[{ accessor: "data", label: "Stock Price" }]}
                        dataset={dataset}
                        loading={loading}
                    />
                ) : (
                    <DonutChart
                        dimension={{
                            accessor: 'month'
                        }}
                        measure={{
                            accessor: 'data'
                        }}
                        chartConfig={{
                            paddingAngle: 5
                        }}
                        dataset={dataset}
                        loading={loading}
                    />
                )}
            </Card>

            <Card
                header={
                    <CardHeader
                        titleText="Progress"
                        subtitleText="List"
                        avatar={<Icon name="list" />}
                        interactive
                        onClick={handleProgressHeaderClick}
                    />
                }
                style={{ width: "300px", ...spacing.sapUiContentPadding }}
            >
                <List>
                    <StandardListItem
                        additionalText="finished"
                        additionalTextState={ValueState.Success}
                    >
                        Activity 1
                    </StandardListItem>
                    <StandardListItem
                        additionalText="failed"
                        additionalTextState={ValueState.Error}
                    >
                        Activity 2
                    </StandardListItem>
                    <StandardListItem
                        additionalText="in progress"
                        additionalTextState={ValueState.Warning}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 3</Title>
                            <ProgressIndicator value={89} valueState={ValueState.Success} />
                        </FlexBox>
                    </StandardListItem>
                    <StandardListItem
                        additionalText="in progress"
                        additionalTextState={ValueState.Warning}
                        style={{ height: "80px" }}
                    >
                        <FlexBox direction={FlexBoxDirection.Column}>
                            <Title level={TitleLevel.H5}>Activity 4</Title>
                            <ProgressIndicator value={5} valueState={ValueState.Error} />
                        </FlexBox>
                    </StandardListItem>
                </List>
            </Card>

            <Card
                header={
                    <CardHeader
                        titleText="AnalyticalTable"
                        avatar={<Icon name="sap-icon://table-view" />}
                    />
                }
                style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
            >
                <AnalyticalTable
                    data={tableData}
                    columns={tableColumns}
                    visibleRows={5} />
            </Card>
        </FlexBox>
    );
}