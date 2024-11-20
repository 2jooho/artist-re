export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
      <div>
        <h1>상품 상세: {params.slug}</h1>
      </div>
    )
  }