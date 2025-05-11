import { Suspense } from "react";
import Loading from "../components/ui/load-dots";
import SearchResults from "../components/SearchResults";

const TopicPage = async (props: {searchParams?: Promise<{query?: string}>}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <section>
      <div className='pr-10'>
        {(query !== '') ? 
          <Suspense key={query} fallback={<Loading />}>
            <SearchResults query={query} log={false} />
          </Suspense> 
          : null
        }
      </div>
    </section>
  );
};

export default TopicPage;