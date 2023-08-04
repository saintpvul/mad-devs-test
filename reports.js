const projectProfit = {
    header: [
        { id: "project_name", type: "string", caption: "Project name" },
        { id: "total_by_project", type: "float", caption: "Total by project" },
        {
            id: "project_type",
            type: "string",
            caption: "Project type",
            align: "center",
        },
        { id: "jan", type: "float", caption: "Jan" },
        { id: "feb", type: "float", caption: "Feb" },
        { id: "mar", type: "float", caption: "Mar" },
        { id: "apr", type: "float", caption: "Apr" },
        { id: "may", type: "float", caption: "May" },
        { id: "jun", type: "float", caption: "Jun" },
        { id: "jul", type: "float", caption: "Jul" },
        { id: "aug", type: "float", caption: "Aug" },
        { id: "sep", type: "float", caption: "Sep" },
        { id: "oct", type: "float", caption: "Oct" },
        { id: "nov", type: "float", caption: "Nov" },
        { id: "dec", type: "float", caption: "Dec" },
    ],
    data: [
        [
            "E-commerce Redesign",
            10243.0,
            "commercial",
            2043.2,
            4096.0,
            3250.5,
            4800.0,
            2890.2,
            3850.3,
            2180.7,
            2670.1,
            3125.0,
            2789.5,
            { d: 3960.0, color: "selected" },
            { d: 5100.2, color: "selected" },
        ],
        [
            "Mobile App Development",
            2451.1,
            "internal",
            3465.3,
            2345.2,
            { d: 12.5, color: "selected" },
            2876.0,
            2965.3,
            3320.8,
            2789.1,
            2450.2,
            2180.0,
            { d: 1890.5, color: "selected" },
            { d: 2590.2, color: "selected" },
            { d: 1990.8, color: "selected" },
        ],
        [
            "Data Analytics Platform",
            5432.4,
            "commercial",
            5648.8,
            3567.0,
            4030.5,
            4820.0,
            3150.2,
            2760.5,
            3389.2,
            4250.7,
            3800.0,
            4980.2,
            { d: 5890.7, color: "selected" },
            { d: 6200.0, color: "selected" },
        ],
        [
            "Website Optimization",
            760.2,
            "internal",
            1689.5,
            1250.3,
            1420.0,
            1980.2,
            1725.0,
            { d: 1650.5, color: "selected" },
            { d: 1780.8, color: "selected" },
            { d: 1890.2, color: "selected" },
            { d: 2010.0, color: "selected" },
            { d: 2150.7, color: "selected" },
            { d: 2320.2, color: "selected" },
            { d: 2400.0, color: "selected" },
        ],
        [
            "AI Chatbot Implementation",
            4389.6,
            "commercial",
            9423.1,
            7800.2,
            8150.7,
            9000.0,
            7600.5,
            8320.0,
            7800.2,
            8900.2,
            9200.5,
            9650.8,
            9980.0,
            { d: 10500.7, color: "selected" },
        ],
    ],
};

const productionData = {
    header: [
        { id: "product_name", type: "string", caption: "Product name" },
        {
            id: "units_produced",
            type: "int",
            caption: "Units Produced",
            align: "center",
        },
        {
            id: "production_cost",
            type: "float",
            caption: "Production Cost ($)",
        },
        { id: "had_issues", type: "bool", caption: "Had Issues" },
        { id: "jan", type: "float", caption: "Jan Production" },
        { id: "feb", type: "float", caption: "Feb Production" },
        { id: "mar", type: "float", caption: "Mar Production" },
        { id: "apr", type: "float", caption: "Apr Production" },
        { id: "may", type: "float", caption: "May Production" },
        { id: "jun", type: "float", caption: "Jun Production" },
        { id: "jul", type: "float", caption: "Jul Production" },
        { id: "aug", type: "float", caption: "Aug Production" },
        { id: "sep", type: "float", caption: "Sep Production" },
        { id: "oct", type: "float", caption: "Oct Production" },
        { id: "nov", type: "float", caption: "Nov Production" },
        { id: "dec", type: "float", caption: "Dec Production" },
    ],
    data: [
        [
            "SmartWatch Pro",
            4126,
            320.0,
            true,
            370,
            { d: 130.0, reason: "out of cpu" },
            350.0,
            400.0,
            420.0,
            380.0,
            { d: 64.0, reason: "main conveyor breakdown" },
            450.0,
            390.0,
            420.0,
            440.0,
            { d: 160.0, reason: "weekends" },
        ],
        [
            "NanoBook Ultra",
            3290,
            1200.0,
            false,
            200.0,
            220.0,
            210.0,
            190.0,
            290.0,
            230.0,
            240.0,
            410.0,
            260.0,
            270.0,
            250.0,
            280.0,
        ],
        [
            "Precision DrillMaster 5000",
            5161,
            31.6,
            true,
            400.0,
            350.0,
            { d: 128.0, reason: "hurricane" },
            500.0,
            520.0,
            { d: 13.0, reason: "fire" },
            { d: 0, reason: "fire" },
            510.0,
            570.0,
            530.0,
            560.0,
            580.0,
        ],
        [
            "ElegantCharm Collection",
            2070,
            120.0,
            false,
            150.0,
            120.0,
            160.0,
            170.0,
            150.0,
            180.0,
            200.0,
            160.0,
            170.0,
            190.0,
            175.0,
            155.0,
        ],
        [
            "HealthGuard Monitor",
            5798,
            1800.0,
            true,
            400.0,
            420.0,
            380.0,
            { d: 25.0, reason: "supply chain issue" },
            410.0,
            430.0,
            { d: 57.0, reason: "supply chain issue" },
            { d: 48.0, reason: "supply chain issue" },
            460.0,
            470.0,
            450.0,
            480.0,
            490.0,
        ],
        [
            "AutoDrive Control Module",
            3170,
            3400.0,
            false,
            250.0,
            210.0,
            230.0,
            200.0,
            220.0,
            240.0,
            250.0,
            270.0,
            280.0,
            260.0,
            290.0,
            300.0,
        ],
    ],
};

const techDeptEmployees = {
    header: [
        { id: "employee_name", type: "string", caption: "Employee Name" },
        { id: "projects_worked", type: "int", caption: "Projects Worked" },
        {
            id: "avg_hours_per_project",
            type: "float",
            caption: "Avg Hours per Project",
        },
        { id: "is_manager", type: "bool", caption: "Is Manager" },
        { id: "main_skill", type: "string", caption: "Main Skill" },
        {
            id: "languages",
            type: "array",
            caption: "Languages Known",
            align: "center",
        },
    ],
    data: [
        [
            "Bagrash Zhamanova",
            5,
            45.2,
            true,
            "Product Management",
            ["Java", "SQL", "Kazakh"],
        ],
        [
            "Said Akupov",
            5,
            45.2,
            true,
            "Software Development",
            ["Java", "Python", "SQL"],
        ],
        [
            "Mateo Fernandez",
            3,
            50.7,
            false,
            "UI/UX Design",
            ["HTML", "CSS", "JavaScript", "Tilda", "Figma", "Spanish"],
        ],
        [
            "Ananya Kapoor",
            7,
            42.1,
            true,
            "Project Management",
            { d: ["English", "Hindi", "Spanish"], level: "Advanced" },
        ],
        [
            "Radj Singh",
            4,
            38.5,
            false,
            "Data Analysis",
            ["R", "Python", "Hindi"],
        ],
        [
            "Elena Petrova",
            6,
            41.2,
            true,
            "Software Development",
            ["Java", "C#", "Russian"],
        ],
    ],
};

export { projectProfit, productionData, techDeptEmployees };
