import { IMenuItem } from "@/types";

export interface INavDropdownItem {
    text: string;
    url: string;
    description?: string;
    icon?: string;
}

export interface INavItem extends IMenuItem {
    dropdown?: INavDropdownItem[];
}

export const menuItems: INavItem[] = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Funktionen",
        url: "#funktionen",
        dropdown: [
            {
                text: "Abwesenheitskalender",
                url: "/funktionen/abwesenheitskalender",
                description: "Übersichtlicher Teamkalender für alle Abwesenheiten"
            },
            {
                text: "Urlaubsanträge",
                url: "/funktionen/urlaubsantraege",
                description: "Einfache Beantragung und Genehmigung"
            },
            {
                text: "Teams Integration",
                url: "/funktionen/teams-integration",
                description: "Nahtlose Microsoft Teams Einbindung"
            },
            {
                text: "Outlook Sync",
                url: "/funktionen/outlook-sync",
                description: "Automatische Kalendersynchronisation"
            },
            {
                text: "Berichte & Insights",
                url: "/funktionen/berichte",
                description: "Detaillierte Auswertungen und Statistiken"
            }
        ]
    },
    {
        text: "Preise",
        url: "#preise"
    },
    {
        text: "Ressourcen",
        url: "#ressourcen",
        dropdown: [
            {
                text: "Hilfe-Center",
                url: "/hilfe",
                description: "Anleitungen und FAQ"
            },
            {
                text: "Blog",
                url: "/blog",
                description: "Tipps und Best Practices"
            },
            {
                text: "Webinare",
                url: "/webinare",
                description: "Live-Demos und Schulungen"
            }
        ]
    },
    {
        text: "Warum absentify?",
        url: "#warum-absentify"
    },
    {
        text: "Sicherheit",
        url: "#sicherheit"
    }
];

export const trustBarItems = [
    {
        icon: "check",
        text: "Microsoft 365 integriert"
    },
    {
        icon: "check",
        text: "DSGVO & ISO 27001"
    },
    {
        icon: "check",
        text: "Sofort einsatzbereit"
    },
    {
        icon: "check",
        text: "Über 200.000 Benutzer"
    }
];
