import Moment from 'react-moment';

import { ArticleRaw } from "./article.types";

const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
    return (<>
        <div className="flex py-3">
            <a href={article.link} rel="noopener noreferrer" target={'_blank'}>
                <div className="flex flex-wrap bg-slate-50 w-full h-full rounded-lg shadow-lg">
                    <img className='h-[165px] w-full object-cover md:w-[200px] rounded-lg border-b-2 md:border-b-0 md:border-r-2' src={article.imageUrl} alt={article.title} />
                    <div className="flex flex-col justify-between p-3 w-full md:w-2/3 max-w-2xl">
                        <h2 className="font-sans text-xl font-semibold">{(article.title.length > 50) ? article.title.substring(0, 50) + '...' : article.title}</h2>
                        <h3 className="font-sans text-md">{(article.desc.length > 200) ? article.desc.substring(0, 200) + '...' : article.desc}</h3>
                        <div className="flex flex-row justify-start">
                            <p className='font-sans font-semibold text-md mr-4'>
                                <Moment format="YYYY/MM/DD">
                                    {article.publishedDate}
                                </Moment>
                            </p>
                            <p className='font-sans font-semibold text-md mx-4'>{article.duration} min read</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </>);
}

interface ArticleCardProps {
    article: ArticleRaw,
}

export default ArticleCard;