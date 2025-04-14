document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-archive-experience');
    const pre2017Items = document.querySelectorAll('.archive');

    toggleButton.addEventListener('click', function () {
        pre2017Items.forEach(item => {
            item.classList.toggle('visible');
        });

        if (toggleButton.textContent === 'Show Earlier Experience') {
            toggleButton.textContent = 'Hide Earlier Experience';
        } else {
            toggleButton.textContent = 'Show Earlier Experience';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dateRanges = document.querySelectorAll('.date-range-alt');

    dateRanges.forEach(dateRange => {
        const durationElement = dateRange.querySelector('.duration');
        const dateText = dateRange.textContent.split('·')[0].trim();
        const dates = dateText.split('-').map(s => s.trim());

        let startDate = parseDate(dates[0]);
        let endDate = dates[1] === 'Present' ? new Date() : parseDate(dates[1]);

        let durationString = '';

        if (startDate && endDate) {
            let years = endDate.getFullYear() - startDate.getFullYear();
            let months = endDate.getMonth() - startDate.getMonth();

            if (months < 0) {
                years--;
                months += 12;
            }

            let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
            if (totalMonths < 0) totalMonths = 0;

            let durationYears = Math.floor(totalMonths / 12);
            let durationMonths = Math.floor(totalMonths % 12);

            if (durationYears > 0) {
                durationString += durationYears + ' yr';
                if (durationYears > 1) durationString += 's';
                if (durationMonths > 0 && durationMonths < 12) durationString += ' ';
            }
            if (durationMonths > 0 && durationMonths < 12) {
                durationString += durationMonths + ' mo';
                if (durationMonths > 1) durationString += 's';
            }

        }

        if (durationElement) {
            durationElement.textContent = durationString;
        }

    });

    function parseDate(dateString) {
        const parts = dateString.split(' ');
        let year;
        let month = 0; // Default to January

        if (!parts || parts.length === 0) {
            return null;
        }

        if (parts.length > 0) {
            if (parts[0]) {
                switch (parts[0]) {
                    case 'Jan': month = 0; break;
                    case 'Feb': month = 1; break;
                    case 'Mar': month = 2; break;
                    case 'Apr': month = 3; break;
                    case 'May': month = 4; break;
                    case 'Jun': month = 5; break;
                    case 'Jul': month = 6; break;
                    case 'Aug': month = 7; break;
                    case 'Sep': month = 8; break;
                    case 'Oct': month = 9; break;
                    case 'Nov': month = 10; break;
                    case 'Dec': month = 11; break;
                }
                if (isNaN(parseInt(parts[0], 10))) {
                    year = parseInt(parts[1], 10);
                } else {
                    year = parseInt(parts[0], 10);
                }
            }
        }

        if (isNaN(year)) {
            return null;
        }

        return new Date(year, month);
    }
});