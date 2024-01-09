using System.ComponentModel.DataAnnotations;

namespace TAKK_App.Server.Models
{
    public class Sign
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; }

        [Required]
        [Url]
        [StringLength(500)]
        public string ImgUrl { get; set; }

        public string[]? Categories { get; set; }
        public string? Description { get; set; }

        public void SetTitleFromImgUrl()
        {

            if (!string.IsNullOrEmpty(ImgUrl))
            {
                Title = Path.GetFileNameWithoutExtension(ImgUrl);
                Title = Title.Replace("%20", " ");
            }
        }
    }
}
