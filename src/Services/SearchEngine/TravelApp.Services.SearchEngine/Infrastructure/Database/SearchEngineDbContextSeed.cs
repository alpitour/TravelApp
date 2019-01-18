using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Serialization;
using TravelApp.Services.SearchEngine.Domain.Models;

namespace TravelApp.Services.SearchEngine.Infrastructure.Database
{
    public class SearchEngineDbContextSeed
    {
        private readonly SearchEngineDbContext context;

        public SearchEngineDbContextSeed(SearchEngineDbContext context)
        {
            this.context = context;
        }

        public void Seed(string xmlFile)
        {
            var hotels = ReadProducts(xmlFile)
                .Select(x => new Hotel
                {
                    Name = x.Name,
                    Description = x.Abstract,
                    ImageUrl = x.ProductThumbUrl,
                    Country = x.Country,
                    Region = x.Region,
                });

            context.Hotels.AddRange(hotels);

            context.SaveChanges();
        }

        private IEnumerable<VacationPackageProduct> ReadProducts(string xmlFile)
        {
            using (var reader = new StreamReader(xmlFile))
            {
                var serializer = new XmlSerializer(typeof(VacationPackagesRoot));
                return ((VacationPackagesRoot)serializer.Deserialize(reader)).Products.Products;
            }
        }

        #region Xml

        [XmlRoot("ROOT")]
        public class VacationPackagesRoot
        {
            [XmlElement("PRODOTTI_VGTO")]
            public VacationPackagesCollection Products { get; set; }
        }

        public class VacationPackagesCollection
        {
            [XmlAttribute("dataEstrazione")]
            public string WhenCreated { get; set; }

            [XmlAttribute("totaleProdotti")]
            public int TotProducts { get; set; }

            [XmlElement("PRODOTTO")]
            public List<VacationPackageProduct> Products { get; set; }
        }

        public class VacationPackageProduct
        {
            [XmlElement("ranking")]
            public string Ranking { get; set; }

            [XmlElement("codAzienda")]
            public string Azie { get; set; }

            [XmlElement("codMarchio")]
            public string KBra { get; set; }

            [XmlElement("codProdotto")]
            public string KPro { get; set; }

            [XmlElement("codVacanza")]
            public string KVac { get; set; }

            [XmlElement("brand")]
            public string Brand { get; set; }

            [XmlElement("nomeProdotto")]
            public string Name { get; set; }

            [XmlElement("descrizioneProdotto")]
            public string Description { get; set; }

            [XmlElement("urlSchedaProdotto")]
            public string ProductCardUrl { get; set; }

            [XmlElement("urlThumbProdotto")]
            public string ProductThumbUrl { get; set; }

            [XmlElement("abstractProdotto")]
            public string Abstract { get; set; }

            [XmlElement("categoriaUfficialeProdotto")]
            public string OfficialCategory { get; set; }

            [XmlElement("categoriaTOProdotto")]
            public string TOCategory { get; set; }

            [XmlElement("longitudineProdotto")]
            public string Longitude { get; set; }

            [XmlElement("latitudineProdotto")]
            public string Latitude { get; set; }

            [XmlElement("keyd")]
            public string Keyd { get; set; }

            [XmlElement("continent")]
            public string Continent { get; set; }

            [XmlElement("country")]
            public string Country { get; set; }

            [XmlElement("region")]
            public string Region { get; set; }

            [XmlElement("province")]
            public string Province { get; set; }

            [XmlElement("city")]
            public string City { get; set; }

            [XmlElement("address")]
            public string Address { get; set; }

            [XmlElement("tags")]
            public string Tags { get; set; }

            [XmlElement("isEarlyBooking")]
            public bool IsEarlyBooking { get; set; }

            [XmlElement("codiceTipologiaProdotto")]
            public string ProductFamilyCode { get; set; }

            [XmlElement("vendibileDal")]
            public string ValidFrom { get; set; }

            [XmlElement("vendibileAl")]
            public string ValidTo { get; set; }

            [XmlArray("CARATTERISTICHE")]
            [XmlArrayItem("CARATTERISTICA")]
            public VacationPackageCaratheristic[] Caratheristics { get; set; }

            [XmlIgnore]
            public string ProductId => string.Join("|", Azie, KBra, KPro, KVac);
        }

        public class VacationPackageCaratheristic
        {
            [XmlElement("chiave")]
            public string Key { get; set; }

            [XmlElement("valore")]
            public string Value { get; set; }
        }
    
        #endregion
    }
}
