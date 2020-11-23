class Book < ApplicationRecord
  enum book_type: {
    novel: 0,
    magazine: 1,
    fairy_tale: 2,
    mystery: 3,
    detective_story: 4,
    autobiography: 5,
    comic: 6
  }
end
