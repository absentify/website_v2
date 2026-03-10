'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'absentify_visitor';

interface VisitorData {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    gclid?: string;
    referrer?: string;
}

export default function TrackingProvider() {
    useEffect(() => {
        // Only capture once per session
        if (sessionStorage.getItem(STORAGE_KEY)) return;

        const params = new URLSearchParams(window.location.search);
        const data: VisitorData = {};

        const utmSource = params.get('utm_source');
        const utmMedium = params.get('utm_medium');
        const utmCampaign = params.get('utm_campaign');
        const utmContent = params.get('utm_content');
        const gclid = params.get('gclid');

        if (utmSource) data.utmSource = utmSource;
        if (utmMedium) data.utmMedium = utmMedium;
        if (utmCampaign) data.utmCampaign = utmCampaign;
        if (utmContent) data.utmContent = utmContent;
        if (gclid) data.gclid = gclid;

        if (document.referrer && !document.referrer.includes('absentify.com')) {
            data.referrer = document.referrer;
        }

        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, []);

    return null;
}
