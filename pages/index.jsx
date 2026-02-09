import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/home');
    }, [router]);

    return (
        <div style={{
            background: '#08001A',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'sans-serif'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid rgba(255,255,255,0.1)',
                    borderTopColor: '#008080',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 20px'
                }}></div>
                <p style={{ opacity: 0.5, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Entering Universe...
                </p>
            </div>
            <style jsx global>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
