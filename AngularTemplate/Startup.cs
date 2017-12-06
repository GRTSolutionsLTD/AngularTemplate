using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularTemplate.Startup))]
namespace AngularTemplate
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
