import Footer from '../components/Footer';
import PurchaseCard from './PurchaseCard';

const Purchase = () => {

    return (
        <div>
            <div className='mt-16 lg:mx-20'>
                <h1 className='text-3xl text-primary text-center'>Our Products List</h1>
                <PurchaseCard></PurchaseCard>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;