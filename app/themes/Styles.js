import Typograph from './Typograph';
import Metrics from './Metrics';
import Colors from './Colors';


const ApplicationStyles = {
    screen: {
        fullCentered: {
            flex: 1,
            backgroundColor: Colors.secondary,
            alignItems: 'center',
            justifyContent: 'center'
        },
        fullSpaceBetween: {
            flex: 1,
            backgroundColor: Colors.secondary,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        full: {
            flex: 1
        },
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        container: {
            flex: 1,
            paddingTop: Metrics.baseMargin,
            backgroundColor: Colors.transparent
        },
        section: {
            margin: Metrics.section,
            padding: Metrics.baseMargin
        },
        sectionText: {
            ...Typograph.style.normal,
            paddingVertical: Metrics.doubleBaseMargin,
            color: Colors.snow,
            marginVertical: Metrics.smallMargin,
            textAlign: 'center'
        },
        subtitle: {
            color: Colors.snow,
            padding: Metrics.smallMargin,
            marginBottom: Metrics.smallMargin,
            marginHorizontal: Metrics.smallMargin
        },
        titleText: {
            ...Typograph.style.h2,
            fontSize: 14,
            color: Colors.text
        }
    },
    forms: {
        container: {
            width: '100%',
            flex: 1,
            padding: 20,
            justifyContent: 'space-between'
        },
        field: {
            rounded: {
                borderWidth: 2,
                borderColor: '#ffffff',
                marginBottom: 20,
                paddingHorizontal: 20,
                backgroundColor: '#ffffff'
            }
        },
        input: {
            color: Colors.secondary
        },
        button: {
            backgroundColor: Colors.primary,
            color: Colors.secondary
        }
    },
    drawer: {
        header: {
            container: {
                height: 150,
                padding: 15,
                paddingBottom: 0,
                backgroundColor: Colors.secondary
            },
            title: {
                fontSize: 20,
                color: '#ffffff'
            },
            button: {
                fontSize: 16,
                color: '#ffffff'
            }
        }
    },
    darkLabelContainer: {
        padding: Metrics.smallMargin,
        paddingBottom: Metrics.doubleBaseMargin,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
        marginBottom: Metrics.baseMargin
    },
    darkLabel: {
        fontFamily: Typograph.type.bold,
        color: Colors.snow
    },
    groupContainer: {
        margin: Metrics.smallMargin,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sectionTitle: {
        ...Typograph.style.h4,
        color: Colors.coal,
        backgroundColor: Colors.ricePaper,
        padding: Metrics.smallMargin,
        marginTop: Metrics.smallMargin,
        marginHorizontal: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.ember,
        alignItems: 'center',
        textAlign: 'center'
    }
};

export default ApplicationStyles;
