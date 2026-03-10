'use client';

import { useCallback } from 'react';

const STORAGE_KEY = 'absentify_visitor';
const BEACON_URL = 'https://app.absentify.com/api/track-visitor';

interface VisitorData {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    gclid?: string;
    referrer?: string;
}

function getVisitorData(): VisitorData {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch {
        // ignore
    }
    return {};
}

export function useTrackingUrl(baseUrl: string, src: string): {
    href: string;
    onClick: () => void;
} {
    const buildUrl = useCallback(() => {
        const url = new URL(baseUrl);
        url.searchParams.set('ref', 'website');
        url.searchParams.set('src', src);

        const visitor = getVisitorData();
        if (visitor.utmSource) url.searchParams.set('utm_source', visitor.utmSource);
        if (visitor.utmMedium) url.searchParams.set('utm_medium', visitor.utmMedium);
        if (visitor.utmCampaign) url.searchParams.set('utm_campaign', visitor.utmCampaign);
        if (visitor.utmContent) url.searchParams.set('utm_content', visitor.utmContent);
        if (visitor.gclid) url.searchParams.set('gclid', visitor.gclid);

        return url.toString();
    }, [baseUrl, src]);

    const sendBeacon = useCallback(() => {
        const visitor = getVisitorData();
        const payload = JSON.stringify({
            ...visitor,
            pageSource: src,
        });

        try {
            if (navigator.sendBeacon) {
                navigator.sendBeacon(
                    BEACON_URL,
                    new Blob([payload], { type: 'application/json' })
                );
            } else {
                fetch(BEACON_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload,
                    keepalive: true,
                }).catch(() => {});
            }
        } catch {
            // Non-critical: tracking beacon failure should not block navigation
        }
    }, [src]);

    return {
        href: buildUrl(),
        onClick: sendBeacon,
    };
}
