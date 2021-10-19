import { Alert, Toast } from 'react-bootstrap';
export default () => {
    return (<>
    <h2>Easy way to show alert messages</h2>
            {['primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark'].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
    <h2>Below are something called Toasts</h2>
    <p>These are smaller messages</p>
            {['primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'].map((variant, idx) => (
                    <Toast className="d-inline-block m-1" bg={variant.toLowerCase()} key={idx}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            Hello, world! This is a toast message.
                        </Toast.Body>
                    </Toast>
            ))}</>)
            }
